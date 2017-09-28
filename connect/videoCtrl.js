
$(document).ready(function() {

    ! function() {

        function query2Hash(queryStr) {
            var h = {};
            var qArr = (queryStr || window.location.search.replace(/\?/, '')).split('&');
            for (var i = 0, len = qArr.length; i < len; i += 1) {
                var kvArr = qArr[i].split('=');
                h[kvArr[0]] = kvArr[1];
            }

            return h;
        }

        var videoConfig = query2Hash();

        // 获取参数
        // title: '', //
        // vurl: '', //视频地址
        // vid: '', //视频ID
        // poster: '',
        // width: 880,
        // height: 536,
        // auto: '0' // 等于 1 时，自动播放

        var vTimer1 = 5;

        $("#J_minPlayer").jPlayer({

            ready: function(event) {

                $(this).jPlayer("setMedia", {
                    poster: videoConfig.poster,
                    m4v: videoConfig.vurl,
                    // ogg:"MIUI9p.ogg"
                });

            },

            canplay: function() {
                readyAction();
            },

            playing: function() {
                $(".jp-video-play").hide();
            },

            play: function() {
                $(".jp-video-play").hide();
                $(".jp-video-loading").hide();
                $("#J_minPlayerWrapper").addClass("jp-state-playing");
                $(".jp-progress-point").show();
                vTimer1 = setInterval(function() {
                    updateTime()
                }, 1000);
            },

            pause: function() {
                $(".jp-video-play").show();
                $("#J_minPlayerWrapper").removeClass("jp-state-playing");
                clearInterval(vTimer1);
            },

            ended: function(event) {
                $(".jp-video-play").css({
                    display: "block"
                });

            },

            click: function(event) {
                event.jPlayer.status.paused ? $(this).jPlayer("play") : $(this).jPlayer("pause")
            },

            resize: function(event) {
                //var o = $(window.parent.document).find("#minPlayerIframe");
                //e.jPlayer.options.fullScreen
                //  $("#J_minPlayerWrapper").css({ position: "fixed",top: 0,left: 0,width: "100%",height: "100%","z-index": 9999});
            },

            //swfPath: "js",
            supplied: "m4v",
            size: {
                width: "880px",
                height: "536px"
            },

        });


        $(".jp-volume-point").css({
            display: "block",
            left: "45%"
        });
        $("#jp_poster_0, .jp-video-play").click(function() {
            $("#J_minPlayer").jPlayer("play");
        });

        $(".jp-play").click(function() {
            $("#J_minPlayer").jPlayer("play")
        });
        $(".jp-pause").click(function() {
            $("#J_minPlayer").jPlayer("pause")
        });

        var isMute = false;
        $(".jp-mute").click(function() {
            if (isMute) {
                isMute = false;
                $("#J_minPlayerWrapper").removeClass("jp-state-muted");
                $(this).removeClass("jp-volume-small");
                $(".jp-volume-bar-value").css({
                    width: "50%"
                });
                $(".jp-volume-point").css({
                    left: "45%"
                });
                $("#J_minPlayer").jPlayer("mute", !1);
            } else {
                isMute = true;
                $("#J_minPlayerWrapper").addClass("jp-state-muted");
                $(this).addClass("jp-volume-small");
                $(".jp-volume-bar-value").css({
                    width: "0%"
                });
                $(".jp-volume-point").css({
                    left: "-5%"
                });
                $("#J_minPlayer").jPlayer("mute", !0);
            }

        });


        var isFull = false;
        // per second check fullscreen?
        $(".jp-full-screen").click(function() {
            if (isFull) {
                isFull = false;
                $("#J_minPlayerWrapper").addClass("jp-video-270p")
                    .removeClass("jp-video-full").removeClass("jp-state-full-screen");
                //un fullscreen?
            } else {
                isFull = true;
                $("#J_minPlayerWrapper").removeClass("jp-video-270p")
                    .addClass("jp-video-full").addClass("jp-state-full-screen");
                $("#J_minPlayer").jPlayer("fullScreen");
                // $("#J_minPlayer").css({"z-index":"999"});
            }

        });

        var cTimer;
        $("#J_minPlayerWrapper").hover(function() {
                clearTimeout(cTimer);
                $(".jp-interface").removeClass("jp-controller-hide");
            },
            function() {
                cTimer = setTimeout(function() {
                    $(".jp-interface").addClass("jp-controller-hide");
                }, 3000);
            });

        //setInterval(updateTime(),1000);
        var i = 0;

        function readyAction() {

            //$("#J_minPlayerWrapper").addClass("jp-video-270p");
            //for test: var value = ++i;
            $(".jp-video-play").css({
                display: "block"
            });
            $(".jp-seek-bar").css({
                width: "100%"
            });
            $(".jp-play-bar").css({
                width: "0%"
            });

            var currentTime = $("#J_minPlayer").data("jPlayer").status.currentTime;
            var duration = $("#J_minPlayer").data("jPlayer").status.duration;
            $(".jp-current-time").text($.jPlayer.convertTime(currentTime));
            $(".jp-duration").text($.jPlayer.convertTime(duration));
            $(".jp-volume-bar-value").css({
                width: "50%"
            });
            $(".jp-title").text("");
            $(".jp-no-solution").css({
                display: "none"
            });

        }

        function updateTime() {

            var currentTime = $("#J_minPlayer").data("jPlayer").status.currentTime;
            var duration = $("#J_minPlayer").data("jPlayer").status.duration;
            var currentShift = currentTime / duration * 100;
            $(".jp-play-bar").css({
                width: currentShift + "%"
            });
            $(".jp-progress-point").css({
                left: currentShift + "%"
            });
            $(".jp-current-time").text($.jPlayer.convertTime(currentTime + 1));
        }

    }();

});

/* base src
$(document).ready(function(){
 $("#J_minPlayer").jPlayer({
 ready: function (event) {
  $(this).jPlayer("setMedia", {
  mp4:"MIUI9p.mp4",
  ogg:"MIUI9p.ogg"
  });
 },
 //swfPath: "js",
 supplied: "mp4, ogg",
 });
});
*/