var app=angular.module('me',[]);
app.controller('mainCtrl',function($scope,$timeout) {
	$scope.oangle=0;
	$scope.iangle=0;
	$scope.poangle=$scope.oangle;
	var CCW=-1,CW=1;
	$scope.DIR=1;
	var dir=CW;

	$scope.Math=Math;
	$scope.buttons=[1,2,3,4,5,6,7,8,9,10,11,12];

	$scope.enjoy=function(){
		rotatei();
		// console.log(direction());
	}

	function rotatei(){
		var oangle=$scope.oangle,iangle=$scope.iangle;
		if(touch(oangle)==touch(iangle)){
			$scope.iangle-=direction();
		}	
	}
	
	function touch(v){
		return (360*360+v)%360;
	}
	
	function direction(){
		var oangle=$scope.oangle,poangle=$scope.poangle;
		$scope.poangle=$scope.oangle;
		if(oangle-poangle>0){
			return CCW;//CCW
		}
		if(oangle-poangle<0){
			return CW;
		}
		return 0;
	}
	var pi=Math.PI;
	$scope.torad=function(z){
		return z*pi/180;
	}
	
	$scope.gotot=function(angle){


		if($scope.oangle <angle*30 ){
			for (var i = $scope.oangle; i <= angle*30; i++) {
				$timeout(function(){
					$scope.oangle++;
					$scope.enjoy();
					$scope.$apply();
				},500);	
			}
			$scope.oangle%=360;
			$scope.enjoy();
		}else{
			for (var i = $scope.oangle; i <= 30*angle+360; i++) {
					$timeout(function(){
					$scope.oangle++;
					$scope.enjoy();
					$scope.$apply();
				},500);	
				};	
		}
	}
});