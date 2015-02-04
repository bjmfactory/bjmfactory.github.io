$(document).ready(function() {

  // variables
  $box     = $(".box")
  $boxEdit = $(".boxEdit")
  $human   = $box.find("h1");
  $link1   = $box.children("a").first();
  $link2   = $link1.next();
  $link3   = $link2.next();

  $humanInput  = $boxEdit.find("input.human");
  $title1Input = $boxEdit.find("input.title1");
  $url1Input   = $boxEdit.find("input.url1");
  $title2Input = $boxEdit.find("input.title2");
  $url2Input   = $boxEdit.find("input.url2");
  $title3Input = $boxEdit.find("input.title3");
  $url3Input   = $boxEdit.find("input.url3");

  // intitialize / update
  var $update = function() {
    $human.text(human);
    $link1.text(title1);
    $link1.attr("href", url1);
    $link2.text(title2);
    $link2.attr("href", url2);
    $link3.text(title3);
    $link3.attr("href", url3);
    $humanInput.val(human)
    $title1Input.val(title1);
    $url1Input.val(url1);
    $title2Input.val(title2);
    $url2Input.val(url2);
    $title3Input.val(title3);
    $url3Input.val(url3);
  }
  $update();

  // functions

  // $box.hover(
  //   function(){
  //     $("button.edit").removeClass("hidden");
  //   },
  //   function(){
  //     $("button.edit").addClass("hidden");
  //   }
  // );

  $("button.edit").click(function() {
    $boxEdit.toggleClass("hidden");
  });

  $("button.save").click(function(){
    human  = $("input.human").val();
    title1 = $("input.title1").val();
    url1   = $("input.url1").val();
    title2 = $("input.title2").val();
    url2   = $("input.url2").val();
    title3 = $("input.title3").val();
    url3   = $("input.url3").val();
    $update();
    $boxEdit.addClass("hidden");
  });
});

// Variables

var box = {
  human: "Ben Johnson",
  link1: {
    title: "seek and ye shall find",
    url: "http://google.com"
  },
  link2: {
    title: "buy slippies",
    url: "http://amazon.com"
  },
  link3: {
    title: "#clickwheels",
    url: "http://apple.com"
  }
};

var human = box.human;
var title1 = box.link1.title;
var url1 = box.link1.url;
var title2 = box.link2.title;
var url2 = box.link2.url;
var title3 = box.link3.title;
var url3 = box.link3.url;

// Box Methods

box.edit = function() {

};

box.new = function() {

}
