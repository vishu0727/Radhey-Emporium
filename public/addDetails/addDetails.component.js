angular
    .module("addDetails")
    .component("addDetails", {
        templateUrl: "addDetails/addDetails.template.html",
        controller: ["$http", function ($http) {
            var $ctrl = this;
            $ctrl.products = [];
            // $ctrl.count = 0;
            // $ctrl.filterDetails = function (customerObject) {
            //     console.log("inside filter function");
            //     return customerObject.contact == $ctrl.contact && customerObject.name == $ctrl.name;
            // };

            // $http.get("./customers.json").then(function (response) {
            //     console.log("inside http function");
            //     $ctrl.customer = response.data;
            //     $ctrl.customer = $ctrl.customer.filter($ctrl.filterDetails);
            // });

            // $("#add").click(function () {
            //     $ctrl.count += 1;
            //     if ($ctrl.customer.length) {
            //         var boughtObject = {
            //             product: $ctrl.productName,
            //             price: $ctrl.price,
            //             company: $ctrl.companyName,
            //             barCode: $ctrl.barcode
            //         };
            //         $ctrl.customer[0].bought.push(boughtObject);
            //     } else {
            //         var name = $ctrl.name;
            //         var contact = $ctrl.contact;
            //         var email = $ctrl.email || "NA";
            //         var bought = [];
            //     }
            //     $("#addDetails").append(`
            //     <br/>
            //     <input type="text" class="form-control" name="bought[$ctrl.count].product" ng-model="$ctrl.productName" value="" placeholder="Product Name" required>
            //     <input type="number" class="form-control" name="bought[$ctrl.count].price" ng-model="$ctrl.price" value="" placeholder="Price" required>
            //     <input type="text" class="form-control" name="bought[$ctrl.count].company" ng-model="$ctrl.companyName" value="" placeholder="Company Name" required>
            //     <input type="text" class="form-control" name="bought[$ctrl.count].barCode" ng-model="$ctrl.barcode" value="" placeholder="Bar Code">
            //     <br/>
            //     `);
            // });


        }]
    });