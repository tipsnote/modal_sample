//modal
$(function(){
	
  //テキストリンクをクリックしたら
	$("#modal-open").click(function(){
	  //body内の最後に<div id="modal-overlay"></div>を挿入
		$("body").append('<div id="modal-overlay"></div>');
    
    //画面中央を取得する関数を実行
    centeringModalSyncer();
    //モーダルウィンドウを表示
		$("#modal-overlay").fadeIn("slow");
		$("#modal-content").fadeIn("slow");	
    
    //画面のどこかをクリックしたらモーダルを閉じる
		$("#modal-overlay,#modal-content").click(function(){
			$("#modal-content,#modal-overlay").fadeOut("slow",function(){
	      //挿入した<div id="modal-overlay"></div>を削除
				$('#modal-overlay').remove() ;
			});
	
		});
    
    //画面の中央を取得する
		$(window).resize(centeringModalSyncer);
		
		function centeringModalSyncer(){
	
			var w = $(window).width();
			var h = $(window).height();
			
			var cw = $("#modal-content").outerWidth();
			var ch = $("#modal-content").outerHeight();
      
	    //cssに算出した位置を追加する
			$("#modal-content").css({"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"});

		}

	});

});
