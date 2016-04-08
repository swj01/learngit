　require.config({
    baseUrl: "../../js",
    　　　　paths: {
        　　　　　　"jquery": "jquery.min",
    　　　　}
　　});

require(['jquery'], function($) {
   React.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
});