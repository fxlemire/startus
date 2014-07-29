(function() {
    var app = angular.module('index-directives', []);

    app.directive("scroll", function ($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {
                    if (this.pageYOffset >= 150) {
                        scope.hideHowItWorks = true;
                    } else {
                        scope.hideHowItWorks = false;
                    }
                    scope.$apply();
                });
            };
        })
    ;
})();
