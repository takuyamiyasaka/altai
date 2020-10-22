  document.addEventListener('DOMContentLoaded', function () {
    var $tab__link = $('.tab__link')
    var $tab_body_item = $('.tab-body__item')
    $tab__link.on('click', function (e) {
      var target = $(e.currentTarget)
      //タブの表示非表示
      $tab__link.removeClass('on')
      target.addClass('on')
      //タブの中身の表示非表示
      var num = target.data('tab-body')
      $tab_body_item.removeClass('on')
      $('.tab-body__item--' + num).addClass('on')
    })
  })