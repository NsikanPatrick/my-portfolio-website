//alert("Javascript is active")

    const body = document.querySelector("body");
    const navigation = document.querySelector(".navigation");
    const menu_items = document.querySelector(".menu-items");
    const menu_item = document.querySelectorAll(".navigation ul li a");
    const btnMenu = document.querySelector(".btn-menu");
    const btnCancel = document.querySelector(".btn-cancel");


    btnMenu.onclick = ()=>{
       menu_items.classList.add("active");
       btnMenu.classList.add("hide");
       body.classList.add("disabledScroll");
    }

    btnCancel.onclick = ()=>{
       menu_items.classList.remove("active");
       btnMenu.classList.remove("hide");
       body.classList.remove("disabledScroll");
    }

    window.onscroll = ()=>{
        this.scrollY > 20 ? navigation.classList.add("sticky") : navigation.classList.remove("sticky");
    }

//Disabling mobile menu automatically at a click of a menu item

    menu_item.forEach(function(item){
        item.onclick = ()=>{
            menu_items.classList.remove("active");
            btnMenu.classList.remove("hide");
            body.classList.remove("disabledScroll");
        }
    });
