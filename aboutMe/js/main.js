var watch__list = $('.watch-checkbox'),
  watch__item = $('.watch__item'),
  watch__item_hidden = $('.watch__item-hidden'),
  watch_complete = $('.watch-complete'),
  i = 0

$('.watch-checkbox').on('click', function(e) {
  var elemCount = $('.watch__item-hidden')
  var clickId = $(this).attr('id')
  var result = document.getElementsByName('check').item(clickId).checked

  if (result) {
    i++
    var elem = document.getElementById(clickId)
    watch__item_hidden.eq(clickId).fadeIn()
    watch__item.eq(clickId).show(1000, function() {
      setTimeout(function() {
        watch__item.eq(clickId).hide(900)
        console.log(i)
      }, 1000)
    })
    setTimeout(function() {
      if (i == watch__item.length) {
        watch_complete.css('opacity', '1')
      }
    }, 1000)
  }
})

$('.social__link').on('click', function(e) {
  e.preventDefault()
})
