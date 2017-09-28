
$(document).ready(function() {

    ! function() {


        $("#J_miniCartTrigger").hover(function() {
            $(this).addClass("topbar-cart-active");
            $("#J_miniCartMenu").show();

        }, function() {
            $(this).removeClass("topbar-cart-active");
            $("#J_miniCartMenu").hide();

        });

        $("#search").focus(function() {
            $("#J_searchForm").addClass("search-form-focus");
            $(".search-hot-words").hide();
            $("#J_keywordList").removeClass("hide");
        });

        $("#search").blur(function() {
            $("#J_searchForm").removeClass("search-form-focus");
            $(".search-hot-words").show();
            $("#J_keywordList").addClass("hide");

        });

        $(".search-btn").click(function(e) {

            if (!$("input#search").val()) e.preventDefault();
            //$("#J_searchForm").attr({onsubmit:"return false"});
            //$(this).attr("disabled","");

        });


        var navTimer1, htmlDis;
        $(".nav-item").hover(function() {

            $(this).addClass("nav-item-active");
            $("#J_navMenu").find("div.container").html("");
            htmlDis = $(this).find("div.container").html();
            $("#J_navMenu").find("div.container").html(htmlDis);

            if (htmlDis) {
                clearTimeout(navTimer1);
                $("#J_navMenu").stop().slideDown();
            } else $("#J_navMenu").hide();

        }, function() {

            $(this).removeClass("nav-item-active");
            if (htmlDis)
                navTimer1 = setTimeout(function() {
                    // $("#J_navMenu").css({display:"none"});
                    $("#J_navMenu").stop().slideUp();
                }, 100);
        });


        $("#J_navMenu").hover(function() {
            clearTimeout(navTimer1);
            $("#J_navMenu").stop().slideDown();

        }, function() {
            navTimer1 = setTimeout(function() {
                $("#J_navMenu").stop().slideUp();
            }, 100);
        });

        //J_categoryList
        $(".category-item").hover(function() {
            $(this).addClass("category-item-active");
        }, function() {
            $(this).removeClass("category-item-active");
        });

    }();


    ! function() {

        var i, slideTimer1, left, right, dotbox, dot, dotClick, box, boxItem, boxLen;
        i = 0;
        left = $(".ui-prev");
        right = $(".ui-next");
        dotbox = $(".ui-pager.ui-default-pager")
        dot = dotbox.find("a");
        dotClick = dotbox.find("div.ui-pager-item");
        box = $("#J_homeSlider");
        boxItem = $("#J_homeSlider div.slide");
        boxLen = boxItem.length;

        slideTimer1 = setInterval(function() {
            i++;
            boxanimate();
        }, 3000);

        function boxanimate() {

            if (i > boxLen - 1) {
                i = 0;
            }
            setTimeout(function() {
                boxItem.eq(i).show().siblings().hide();
                boxItem.stop().animate({
                    "z-index": "0"
                }, 500).eq(i).stop().animate({
                    "z-index": "50"
                }, 500);
                dot.removeClass("active").eq(i).addClass("active");
            }, 200);
        }


        dotClick.click(function() {
            i = $(this).index();
            boxanimate();
        });

        left.click(function() {
            if (box.is(":animated")) {
                return;
            }
            i--;
            if (i < 0) {
                i = boxLen - 1;
            }
            boxanimate();
        });

        right.click(function() {
            if (box.is(":animated")) {
                return;
            }
            i++;
            boxanimate();
        });

        box.hover(function() {
            clearInterval(slideTimer1);
        }, function() {
            slideTimer1 = setInterval(function() {
                i++;
                boxanimate();
            }, 3000);
        });

        dotbox.hover(function() {
            clearInterval(slideTimer1);
        }, function() {
            slideTimer1 = setInterval(function() {
                i++;
                boxanimate();
            }, 3000);
        });

        left.hover(function() {
            clearInterval(slideTimer1);
        }, function() {
            slideTimer1 = setInterval(function() {
                i++;
                boxanimate();
            }, 3000);
        });

        right.hover(function() {
            clearInterval(slideTimer1);
        }, function() {
            slideTimer1 = setInterval(function() {
                i++;
                boxanimate();
            }, 3000);
        });

    }();


    $(function() {

        var i, left, right, IsAuto, dotbox, dot, dotClick, box, boxItem, boxLen;
        i = 0;
        left = $("#J_homeStar .control-prev");
        right = $("#J_homeStar .control-next");
        IsAuto = true;
        box = $(".J_carouselList");
        boxItem = $(".J_carouselList > li");
        boxLen = boxItem.length;

        setInterval(function() {
            if (IsAuto) {
                if (i == 0) {
                    i = 1;
                } else {
                    i = 0;
                }
                boxanimate();
            }
        }, 5000);

        function boxanimate() {
            setTimeout(function() {
                if (i == 0) {
                    box.css({
                        "margin-left": "0px"
                    });
                    left.addClass("control-disabled");
                    right.removeClass("control-disabled");
                } else {
                    box.css({
                        "margin-left": "-1240px"
                    });
                    left.removeClass("control-disabled");
                    right.addClass("control-disabled");
                }
            }, 200);
        }

        left.click(function() {
            if (box.is(":animated")) {
                return;
            }
            i = 0;
            boxanimate();
        });

        right.click(function() {
            if (box.is(":animated")) {
                return;
            }
            i = 1;
            boxanimate();
        });

        box.hover(function() {
            IsAuto = false;
        }, function() {
            IsAuto = true;
        });

        left.hover(function() {
            IsAuto = false;
        }, function() {
            IsAuto = true;
        });

        right.hover(function() {
            IsAuto = false;
        }, function() {
            IsAuto = true;
        });
    });


    ! function() {

        $("#smart .tab-list.J_brickTabSwitch > li").hover(function() {
            $(this).addClass("tab-active").siblings().removeClass("tab-active");
            var i = $(this).index();
            $("#smart .tab-container > ul").addClass("hide").hide()
                .eq(i).removeClass("hide").show();
        }, function() {
            //$(this).removeClass("tab-active");
        });

        $("#accessories .tab-list.J_brickTabSwitch > li").hover(function() {
            //var prevItem? only remove that instead of all siblings?
            $(this).addClass("tab-active").siblings().removeClass("tab-active");
            var i = $(this).index();
            $("#accessories .tab-container > ul").addClass("hide").hide()
                .eq(i).removeClass("hide").show();
        }, function() {
            //$(this).removeClass("tab-active");
        });

        //var prevItem = $(".brick-item").first();
        $(".brick-item").hover(function() {
            $(this).addClass("brick-item-active");
        }, function() {
            $(this).removeClass("brick-item-active")
        });

    }();


    $(function() {

        var
            left = $("#recommend .control-prev"),
            right = $("#recommend .control-next"),
            box = $(".xm-recommend ul"),
            boxLen = box.children().length,
            iPage = 0,
            pageTotal = boxLen / 5,
            leftStep = 1240,
            leftSum = 0;

        function pageSwitch() {
            setTimeout(function() {
                leftSum = -iPage * leftStep;
                box.css({
                    "margin-left": leftSum + "px"
                });
            }, 200);
        }

        left.click(function() {
            if (box.is(":animated")) {
                return;
            }
            if (iPage > 0) {
                iPage--;
                pageSwitch();
            }
            if (iPage == pageTotal - 2) {
                right.removeClass("control-disabled");
            }
            if (iPage == 0) {
                left.addClass("control-disabled");
            }

        });

        right.click(function() {
            if (box.is(":animated")) {
                return;
            }
            if (iPage < pageTotal - 1) {
                iPage++;
                pageSwitch();
            }
            if (iPage == 1) {
                left.removeClass("control-disabled");
            }
            if (iPage == pageTotal - 1) {
                right.addClass("control-disabled");
            }
        });

    });


    ! function() {

        var leftStep = 296,
            lastvar = false;

        blockBind("li.content-item-book");
        blockBind("li.content-item-theme");
        blockBind("li.content-item-game");
        blockBind("li.content-item-app");

        function blockBind(blockItem) {
            var
                left = $(blockItem).find(".control-prev"),
                right = $(blockItem).find(".control-next"),

                box = $(blockItem).find("ul.item-list"),
                boxLen = box.find("li").length,
                // dotbox = $(blockItem).find("ul.item-list"),
                dot = $(blockItem).find("ul.xm-pagers > li"),
                iPage = 0,
                leftSum = 0,
                lastvar2 = false;

            //bindLR(left,right,box,iPage,leftSum,boxLen);

            dot.click(function() {
                iPage = $(this).index();
                pageSwitch();
                dot.removeClass("pager-active").eq(iPage).addClass("pager-active");
            });

            left.click(function() {
                if (box.is(":animated")) {
                    return;
                }
                if (iPage > 0) {
                    iPage--;
                    pageSwitch();
                    dot.removeClass("pager-active").eq(iPage).addClass("pager-active");
                }
                if (iPage == boxLen - 2) {
                    right.removeClass("control-disabled");
                }
                if (iPage == 0) {
                    left.addClass("control-disabled");
                }
            });

            right.click(function() {
                if (box.is(":animated")) {
                    return;
                }
                if (iPage < boxLen - 1) {
                    iPage++;
                    pageSwitch();
                    dot.removeClass("pager-active").eq(iPage).addClass("pager-active");
                }
                if (iPage == 1) {
                    left.removeClass("control-disabled");
                }
                if (iPage == boxLen - 1) {
                    right.addClass("control-disabled");
                }
            });

            function pageSwitch() {
                setTimeout(function() {
                    leftSum = -iPage * leftStep;
                    box.css({
                        "margin-left": leftSum + "px"
                    });
                }, 200);
            }
        }
        // same var trans in and trans out?

    }();


    ! function() {

        $("#video .video-item a").click(function() {
            var allHeight = $("body").height();
            $("#all-mask").css({
                height: allHeight + "px",
                display: "block"
            });

            var videoBlock = $("#J_modalVideo");
            videoBlock.show().addClass("in");
            videoBlock.find(".modal-hd>h3").text($(this).attr("data-video-title"));
            var connectSrc = "connect/iframesrc.html" + "?vurl=" + $(this).attr("data-video") +
                "&poster=" + $(this).attr("data-video-poster");
            videoBlock.find(".modal-bd>iframe").attr({
                src: connectSrc
            });

        });

        $("#J_modalVideo a.close").click(function() {
            $("#all-mask").css({
                height: 0,
                display: "none"
            });
            var videoBlock = $("#J_modalVideo");
            videoBlock.hide().removeClass("in");
            videoBlock.find(".modal-hd>h3").html("");
            videoBlock.find(".modal-bd>iframe").attr({
                src: ""
            });
        });

    }();

});