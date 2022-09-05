'use strict';

const tabContainer = document.querySelector('[data-tabContainer]');
const targetsContainers = document.querySelectorAll('[data-targets-container]');

const handleClickedTab = function(event){
    const clickedTab = event.target.closest('[data-tab]');
    if (!clickedTab)
    {
        return;
    }

    tabContainer.querySelector('.selected-tab').classList.remove('selected-tab');
    clickedTab.classList.add('selected-tab');

    showTarget(clickedTab.dataset.tab);
    
};

const showTarget = function(targetElement) {
    targetsContainers.forEach(targetContainer => {
       targetContainer.querySelectorAll('[data-source-target]').forEach(source => {
           if(source.dataset.sourceTarget === targetElement)
           {
               source.classList.remove('hidden-target-tab');
           }
           else
           {
               source.classList.add('hidden-target-tab');
           }
       }); 
    });
};

if (tabContainer)
{
    tabContainer.addEventListener('click', handleClickedTab);
}
