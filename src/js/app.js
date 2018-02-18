(function(){
  'use strict';
  var app = {
    init: function() {
      var self = this;
      this.$window = $(window);
      this.$wrapper = $('.wrapper');
      this.$form = $('.form');
      this.$defaultForm = $(".form-wrapper:first");
      this.$password = $("#password"); 
      this.$confirmPassword = $("#confirm-password");
      this.$tabcontent = $(".form-wrapper");
      this.$link = $('.nav_link');

      setTimeout(function(){
        self.$defaultForm.fadeIn('slow');
      });

      this.$window.on('resize', this.fixHeight.bind(this));
      this.$link.on('click', this.openForm.bind(this));
      this.$password.on('change', this.validatePassword.bind(this));
      this.$confirmPassword.on('keyup', this.validatePassword.bind(this));
    },
    validatePassword: function(){
      this.$password.val() != this.$confirmPassword.val() ?
        this.$confirmPassword[0].setCustomValidity("Passwords Don't Match") :
        this.$confirmPassword[0].setCustomValidity('');
    },
    openForm: function(event) {
      event.preventDefault();
      var formToHide = $(event.target).parent().parent();
      var index = formToHide.index();
      formToHide.hide();
      index === 0 ? $(this.$tabcontent[1]).show() : $(this.$tabcontent[0]).show();
      this.fixHeight();
    },
    fixHeight: function(){ // Cannot use min-height on wrapper because of ie bug with flex box
      var wrapperHeight = this.$wrapper.height();
      var formHeight = this.$form.height();
      wrapperHeight < formHeight ? this.$wrapper.height(formHeight) : this.$wrapper.height('100%');
    }
  };

  $(window).on('load', function(){
    app.init();
  });
})();
