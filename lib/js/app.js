"use strict";

(function () {
  'use strict';

  var app = {
    init: function init() {
      var self = this;
      this.$window = $(window);
      this.$wrapper = $('.wrapper');
      this.$formWrapper = $(".form-container");
      this.$form = $('.form');
      this.$defaultForm = $(".form-wrapper:first");
      this.$password = $("#password");
      this.$confirmPassword = $("#confirm-password");
      this.$tabcontent = $(".form-wrapper");
      this.$link = $('.nav_link');
      this.$formWrapper.show();
      setTimeout(function () {
        self.$defaultForm.fadeIn('slow');
      });
      this.$link.on('click', this.openForm.bind(this));
      this.$password.on('change', this.validatePassword.bind(this));
      this.$confirmPassword.on('keyup', this.validatePassword.bind(this));
    },
    validatePassword: function validatePassword() {
      this.$password.val() != this.$confirmPassword.val() ? this.$confirmPassword[0].setCustomValidity("Passwords Don't Match") : this.$confirmPassword[0].setCustomValidity('');
    },
    openForm: function openForm(event) {
      event.preventDefault();
      var formToHide = $(event.target).parent().parent();
      var index = formToHide.index();
      formToHide.hide();
      index === 0 ? $(this.$tabcontent[1]).show() : $(this.$tabcontent[0]).show();
    }
  };
  $(window).on('load', function () {
    app.init();
  });
})();