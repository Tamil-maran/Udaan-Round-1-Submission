angular.module('apiService', ['ngResource'])
    .factory('api', [
        '$resource',
        function ($resource) {
            return $resource('http://localhost:3000/:endp/:val',
                {},
                {
                    addAsset: {
                        method: 'POST',
                        params: {endp: 'add-asset'}
                    },
                    addTask: {
                        method: 'POST',
                        params: {endp: 'add-task'}
                    },
                    addWorker: {
                        method: 'POST',
                        params: {endp: 'add-worker'}
                    },
                    allocateTask: {
                        method: 'POST',
                        params: {endp: 'allocate-task'}
                    },
                    allAssets: {
                        method: 'GET',
                        params: {endp: 'assets', val: 'all'}
                    },
                    workerTasks: {
                        method: 'GET',
                        params: {endp: 'get-tasks-for-worker'}
                    }
                });
        }
    ]);
    