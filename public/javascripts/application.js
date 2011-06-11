Whoops = {
  setupFilters: function() {
    $("#new_whoops_filter select").change(function(){
      $("#new_whoops_filter").submit()
    })
    $("#reset").click(function(){
      window.location = "/?whoops_filter[service]"
      return false
    })
  },
  
  setupEventLinks: function() {
    $("#instances a").click(function(){
      $(".selected").removeClass("selected")
      $(this).parents("li").addClass("selected")
      $.get(this.href,function(data){
        $("#event-details").html(data)
      }, 'html')
      return false;
    })
  },
  
  setup: function() {
    this.setupFilters()
    this.setupEventLinks();
  }
}

$(function(){
  Whoops.setup();
})

jQuery.ajaxSetup({ 
  beforeSend: function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
})