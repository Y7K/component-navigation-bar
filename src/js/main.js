import Vue from 'vue';

import _NavigationBar from './components/NavigationBar';

export default {
    registerGlobally: function() {
        Vue.component('navigation-bar', _NavigationBar);
    },
};

export const NavigationBar = _NavigationBar;
