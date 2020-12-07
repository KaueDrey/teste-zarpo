define([
    'jquery',
    'ko',
    'uiComponent',
    'Magento_Customer/js/model/authentication-popup'
], function ($, ko, Component, ajaxLogin) {
    'use strict';
    
    return Component.extend({
        registerUrl: window.ajaxLogin.customerRegisterUrl,
        autocomplete: window.ajaxLogin.autocomplete,
        forgotPasswordUrl: window.ajaxLogin.customerForgotPasswordUrl,
        isLoading: ko.observable(false),

        defaults: {
            template: 'Smarty_Zarpoo/ajaxlogin-popup'
        },

        initialize: function () {
            this._super();        
        },

        /** Show login modal */
        setAjaxModelElement: function (element) {
            if (ajaxLogin.modalWindow == null) {
                ajaxLogin.createPopUp(element);
                ajaxLogin.showModal();
            }
        },

        login: function (formUiElement, event) {
            alert('efetuar login');
        }
    });
}
);