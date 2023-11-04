function onClear() {
    // document.querySelectorAll('li').forEach(item => item.remove());

    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';

    while (itemList.firstChild)
        itemList.removeChild(itemList.firstChild);
}

// JavaScript event listener

const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function () {
//     alert('Clear Items');
// };

// clearBtn.onclick = function () {
//     console.log('Clear Items');
// };

// addEventListener()
clearBtn.addEventListener('click', () => console.log('clear items'));
clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);