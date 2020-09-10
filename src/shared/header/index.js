$(document).ready(function () {
  menuMobile()
  menuDashBoard()
  clickMyCareerBuilder()
  // clickSearchJobs()
  dropdownMenu()
});

function dropdownMenu(){
  $('.dropdown-mobile').each(function(){
    $(this).on('click', function(){
      if($(this).hasClass('show-menu')){
        $('.dropdown-mobile').removeClass('show-menu')
      }else{
        $('.dropdown-mobile').removeClass('show-menu')
        $(this).addClass('show-menu')
      }
      if($(this).hasClass('dropdown-2-menu')){
        $(this).addClass('show-menu')
      }
    })
  })
  $('.dropdown-mobile-2').each(function(){
    $(this).on('click', function(){
      $('.dropdown-2-menu').addClass('show-menu')
      if($(this).hasClass('show-menu-2')){
        $('.dropdown-mobile-2').removeClass('show-menu-2')
      }else{
        $('.dropdown-mobile-2').removeClass('show-menu-2')
        $(this).addClass('show-menu-2')
      }
    })
  })
}

function menuMobile() {
  $('.button-hambuger').on('click', function () {
    $('.mobile-menu').toggleClass('show')
    $('html').toggleClass('menu-mobile-active')
    $('.back-drop').addClass('active')
    if($('html').hasClass('menu-mobile-active')){
      $('.back-drop').addClass('active')
    }else{
      $('.back-drop').removeClass('active')
    }
  })
  $('.back-drop').on('click', function () {
    $('.mobile-menu').removeClass('show')
    $('html').removeClass('menu-mobile-active')
    $('.back-drop').removeClass('active')
    $('header .main-login .dropdown-menu').slideUp()
    $('.edit-db-career-goals').removeClass('active')
    $('.edit-db-outstanding-achievements').removeClass('active')

  })
  $('.dropdown-search-jobs').on('click', function () {
    $('.dropdown-search-jobs .dropdown-menu').slideToggle()
  })
  $('header .main-login .title-login').on('click', function () {
    $('header .main-login .dropdown-menu').slideToggle()
    $('.back-drop').toggleClass('active')
  })

}

function clickMyCareerBuilder() {
  $('header .mobile-menu .header-bottom-bottom .authentication-links .My-CareerBuilder').on('click', function () {
    // console.log(1)
    $('header .mobile-menu .profile .back-menu-normal').addClass('active')
    $('header .mobile-menu .menu').addClass('active')
    $('header .mobile-menu .menu .menu-normal').addClass('active')
    $('header .mobile-menu .menu .menu-logged').addClass('active')
    $('header .mobile-menu .header-bottom-bottom .authentication-links').addClass('active')
  })
  $('header .mobile-menu .profile .back-menu-normal').on('click', function () {
    $('header .mobile-menu .profile .back-menu-normal').removeClass('active')
    $('header .mobile-menu .menu').removeClass('active')
    $('header .mobile-menu .menu .menu-normal').removeClass('active')
    $('header .mobile-menu .menu .menu-logged').removeClass('active')
    $('header .mobile-menu .header-bottom-bottom .authentication-links').removeClass('active')
  })
}

// function clickSearchJobs() {
//   $('header .mobile-menu .menu .menu-normal .search-jobs').on('click', function () {

//     $('header .mobile-menu .profile .back-menu-normal').addClass('active')
//     $('header .mobile-menu .menu').addClass('active')
//     $('header .mobile-menu .menu .menu-normal').addClass('active')
//     $('header .mobile-menu .menu .menu-search-jobs').addClass('active')
//     $('header .mobile-menu .header-bottom-bottom .authentication-links').addClass('active')
//   })
//   $('header .mobile-menu .profile .back-menu-normal').on('click', function () {
//     // console.log(1)
//     $('header .mobile-menu .profile .back-menu-normal').removeClass('active')
//     $('header .mobile-menu .menu').removeClass('active')
//     $('header .mobile-menu .menu .menu-normal').removeClass('active')
//     $('header .mobile-menu .menu .menu-search-jobs').removeClass('active')
//     $('header .mobile-menu .header-bottom-bottom .authentication-links').removeClass('active')
//   })
// }

function menuDashBoard() {
  $('header .mobile-menu .menu .menu-logged ul .menu-dashboard').on('click', function () {
    $('header .mobile-menu .menu .menu-logged').addClass('active-2')
    $('header .mobile-menu .menu .menu-logged ul .menu-dashboard .list-unstyled').removeClass('active')
    $(this).find('.list-unstyled').addClass('active')
    $('header .mobile-menu .profile .back-menu-normal-2').addClass('active')
    $('header .mobile-menu .profile .back-menu-normal').removeClass('active')
  })
  $('header .mobile-menu .profile .back-menu-normal-2').on('click', function () {
    $(this).removeClass('active')
    $('header .mobile-menu .profile .back-menu-normal').addClass('active')
    $('header .mobile-menu .menu .menu-logged ul .menu-dashboard .list-unstyled').removeClass('active')
    $('header .mobile-menu .menu .menu-logged').removeClass('active-2')
  })
}