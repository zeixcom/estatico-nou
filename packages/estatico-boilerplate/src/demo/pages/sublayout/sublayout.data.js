'use strict';

var _ = require('lodash'),
    defaultData = require('../../../data/default.data.js'),
    data = _.merge(defaultData, {
        meta: {
            title: 'Demo: 03 Sublayout'
        },
        props: {
            title: 'Sublayout',
            text: 'This page demonstrates how to extend a sublayout.',
            sidebar: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            modules: {
                skiplinks: require('../../modules/skiplinks/skiplinks.data.js').props
            }
        }
    });

module.exports = data;
