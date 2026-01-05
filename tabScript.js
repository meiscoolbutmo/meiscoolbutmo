const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    const target = document.querySelector('#' + tab.dataset.tabTarget)

    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove('active')
    })

    target.classList.add('active')
  })
})
