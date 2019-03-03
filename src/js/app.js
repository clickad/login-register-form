(()=> {
  'use strict';
  let app = {
    init: function() {
      let self = this;
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
      setTimeout(() =>{
        self.$defaultForm.fadeIn('slow');
      });

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
      let formToHide = $(event.target).parent().parent();
      let index = formToHide.index();
      formToHide.hide();
      index === 0 ? $(this.$tabcontent[1]).show() : $(this.$tabcontent[0]).show();
    }
  };

  $(window).on('load', ()=> {
    app.init();
  });
})();
