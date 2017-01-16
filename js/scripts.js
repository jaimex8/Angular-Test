// Init angular app
var app = angular.module("gameReviews", []);

app.controller("mainController", function($scope,$http) {
  
  // Start ajax call to get raw data
  $http({
    method: 'GET',
    //Used https to avoid insecure data transfer
    url: 'https://www.cheapshark.com/api/1.0/deals'
    }).then(function successCallback(response) {
      
      // Create empty parent array
      $scope.groupList = [];      
      // Declare raw data variable
      var rawData = response.data,
      // Create empty scoreGroup array
      scoreGroups = [];      

      // Generate score property from metacriticScore property and insert into scoreGroups array
      for (var i = 0; i < rawData.length; i++) {
        var score = parseInt(Math.ceil((rawData[i].metacriticScore / 10)) * 10);
        if (scoreGroups.indexOf(score) == -1){
          scoreGroups.push(score);
        }
      }
      // Sort scoreGroups in numerically descending order
      scoreGroups.sort(function(a,b){
        return b - a
      });
      
      // Start looping through scoreGroups
      for (var i = 0; i < scoreGroups.length; i++) {
        // Create empty child array
        $scope.gameList = [];
        
        // Start looping through gameList and push into associated scoreGroup
        for (var j = 0; j < rawData.length; j++) {
          if (rawData[j].metacriticScore <= scoreGroups[i] && rawData[j].metacriticScore > (scoreGroups[i]-10) ){            
            $scope.gameList.push(rawData[j]);
          }
        }
        
        // Push games into parent array by scoreGroup
        $scope.groupList.push({ "score": scoreGroups[i], "gameData": $scope.gameList });
        
        // Sort in ascending alphebetical order
        $scope.groupList[i].gameData.sort(function(a,b) {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
        
      }

      // Log final data structure for review
      console.log($scope.groupList);

    }, function errorCallback(response) {
      $scope.errorLog = response.statusText;
  });
});