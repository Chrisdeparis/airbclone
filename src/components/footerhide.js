// const hideFooter = () => {
    //     let scrollTop=0;
    //     let lastScrollTop = 0;
        
    //     const footer = document.getElementById('footer');

    //     window.addEventListener("scroll", function() {
    //         let scrollTop = window.pageYOffset;
    //     })

    //     //  const EndPage = window.scrollY;
    //     //  console.log('scroll = ' + window.scrollY);
    //     //  if(window.scrollY < 80) {

    //     //     console.log('on cache le footer');
    //     //     console.log(scrollTop);
    //     //     setFooter(true)
    //     //     footer.style.bottom="-80px";

    //     // } else {
    //     //     footer.style.bottom="0";
    //     //     setFooter(false);
            
    //     //     console.log('on montre le footer');
    //     // }
    //     // lastScrollTop = scrollTop;
    // }

    useEffect(() => {
        // hideFooter();
    }, []);

    // window.addEventListener('scroll', hideFooter);  

    // const changeBackground = () => {
    //     console.log(window.scrollY);
    //     if(window.scrollY > 80) {
    //         setFooter(true);
    //     } else {
    //         setFooter(false);
    //     }
    // }

    // window.addEventListener('scroll', changeBackground);