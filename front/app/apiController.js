app.controller('apiController', [
    '$scope', 'api',
    function ($scope, api) {
        $scope.model = {
            addAsset : {
                type: "",
                possibleTasks: [],
                location: {
                    building: "",
                    floorNo: "",
                    roomNo: ""
                },
                tags: [],
            },
            addAssetResp: {},
            addTask : {
                action: "",
                frequency: "",
            },
            addTaskResp: {},
            addWorker : {
                firstName: "",
                lastName: "",
                skills: "",
            },
            addworkerResp: {},
            alloc : {
                assetId: "",
                taskId: "",
                workerId: "",
                taskToBePerformedBy: "",
            },
            allocResp: {},
            allAssets: [],
            workerId: "",
            workerTasks : [],
        };

        $scope.addAsset = function(asset) {
            asset.possibleTasks = asset.possibleTasks.split(",");
            asset.tags = asset.tags.split(",");
            console.log(asset);
            api.addAsset(asset).$promise
                .then(function (response) {
                    $scope.model.addAssetResp = response;
                },
                function (response) {
                    alert('error');
                });
        };
        $scope.addTask = function(task) {
            console.log(task);
            api.addTask(task).$promise
                .then(function (response) {
                    $scope.model.addTaskResp = response;
                },
                function (response) {
                    alert('error');
                });
        };
        $scope.addWorker = function(worker) {
            worker.skills = worker.skills.split(",");
            console.log(worker);
            api.addWorker(worker).$promise
                .then(function (response) {
                    $scope.model.addWorkerResp = response;
                },
                function (response) {
                    alert('error');
                });
        };
        $scope.allocateTask = function(alloc) {
            console.log(alloc);
            api.allocateTask(alloc).$promise
                .then(function (response) {
                    $scope.model.allocResp = response;
                },
                function (response) {
                    alert('error');
                });
        };
        $scope.allAssets = function() {
            api.allAssets().$promise
                .then(function (response) {
                    $scope.model.allAssets = response.assets;
                },
                function (response) {
                    console.log(response);
                });
        };
        $scope.workerTasks = function(workerId) {
            api.workerTasks({val: workerId}).$promise
                .then(function (response) {
                    $scope.model.workerTasks = response.tasks;
                },
                function (response) {
                    console.log(response);
                });
        };
    }
    
]);