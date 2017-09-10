angular
    .module("viewDetails")
    .component("viewDetails", {
        templateUrl: "viewDetails/viewDetails.template.html",
        controller: ["$http", "$document", function ($http, $document) {
            var $ctrl = this;
            $ctrl.bool = false;

            $ctrl.filterDetails = function (customerObject) {
                // console.log("inside filter function");
                return customerObject.contact == $ctrl.query;
            };

            $ctrl.search = function () {
                $http.get("./customers.json").then(function (response) {
                    // console.log("inside search function");
                    $ctrl.customer = response.data;
                    $ctrl.customer = $ctrl.customer.filter($ctrl.filterDetails);
                    $ctrl.bool = true;
                });
            };
        }]
    });