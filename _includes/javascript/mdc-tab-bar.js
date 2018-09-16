<script>
  function initTabs(el) {
    var tabBar = window.dynamicTabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.' + el));
    var panels = document.querySelector('.panels');
    var dots = document.querySelector('.dots');

    function updatePanel(index) {
      var activePanel = panels.querySelector('.panel.active');
      if (activePanel) {
        activePanel.classList.remove('active');
      }
      var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
      if (newActivePanel) {
        newActivePanel.classList.add('active');
      }
    }

    function updateDot(index) {
      var activeDot = dots.querySelector('.dot.active');
      if (activeDot) {
        activeDot.classList.remove('active');
      }
      var newActiveDot = dots.querySelector('.dot:nth-child(' + (index + 1) + ')');
      if (newActiveDot) {
        newActiveDot.classList.add('active');
      }
    }

    dynamicTabBar.listen('MDCTabBar:activated', function(t) {
      var tabs = t.detail;
      var nthChildIndex = tabs.index;

      updatePanel(nthChildIndex);
      updateDot(nthChildIndex);
    });

    dots.addEventListener('click', function(evt) {
      if (!evt.target.classList.contains('dot')) {
        return;
      }

      evt.preventDefault();

      var dotIndex = [].slice.call(dots.querySelectorAll('.dot')).indexOf(evt.target);

      if (dotIndex >= 0) {
        dynamicTabBar.activeTabIndex = dotIndex;
      }

      updatePanel(dotIndex);
      updateDot(dotIndex);
    })
  }

initTabs('mdc-tab-bar');

</script>
