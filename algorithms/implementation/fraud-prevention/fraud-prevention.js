// https://www.hackerrank.com/challenges/fraud-prevention

'use strict';

var reader = require('file-reader');
reader.init(processData);

function parseBase10(s) {
    return parseInt(s, 10);
}

function OrderDetail(orderData) {
    function parseEmail_(s) {
        var parts = s.split('@');
        var alias = parts.shift();
        alias = alias.replace('.', '');

        var index = alias.indexOf('+');
        if (index != -1) {
            alias = alias.substring(0, index);
        }

        return alias + '@' + parts.shift();
    }

    function parseStreet_(s) {
        var street = s.replace('st.', 'street');
        street = street.replace('rd.', 'road');

        return street;
    }

    function parseState_(s) {
        var state = s.replace('illinois', 'il');
        state = state.replace('california', 'ca');
        state = state.replace('new york', 'ny');

        return state;
    }

    var detail = {};
    detail.orderId = parseBase10(orderData[0]);
    detail.dealId = parseBase10(orderData[1]);
    detail.email = parseEmail_(orderData[2]);

    var street = parseStreet_(orderData[3]);
    var city = orderData[4];
    var state = parseState_(orderData[5]);
    var zip = orderData[6].replace('-', '');
    detail.addr = [street, city, state, zip].join(',');

    detail.cc = orderData[7];
    detail.dealEmailId = detail.dealId + '_' + detail.email;
    detail.dealAddrId = detail.dealId + '_' + detail.addr;

    this.detail = detail;
    return detail;
}

function processData(input) {
    var lines = input.toLowerCase().split('\n');
    var numTests = parseBase10(lines.shift());

    var orders = [];
    var frauds = [];

    var email_deal_hash = [];
    var addr_deal_hash = [];

    for (var t=0;t<numTests;t++) {
        var raw = lines.shift().trim();
        var orderData = raw.split(',');
        var order = new OrderDetail(orderData);

        var emailDupIndex = email_deal_hash.indexOf(order.dealEmailId);
        if (emailDupIndex != -1) {
            var dup = orders[emailDupIndex];
            if (frauds.indexOf(dup.orderId) == -1) {
                frauds.push(dup.orderId);
            }
            frauds.push(order.orderId);
        }

        var addDupIndex = addr_deal_hash.indexOf(order.dealAddrId);
        if (addDupIndex != -1) {
            var dup = orders[addDupIndex];
            if (frauds.indexOf(dup.orderId) == -1) {
                frauds.push(dup.orderId);
            }
            frauds.push(order.orderId);
        }

        orders.push(order);
        email_deal_hash.push(order.dealEmailId);
        addr_deal_hash.push(order.dealAddrId);
    }

    frauds = frauds.sort( function(a,b) {
        if (a < b) {
            return -1;
        }

        if (a == b) {
            return 0;
        }

        return 1;
    });

    console.log(frauds.join(','));
}