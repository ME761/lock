var app=angular.module('me',[]);
app.controller('mainCtrl',function($scope,$timeout) {
	$scope.oangle=0;
	$scope.iangle=50;
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
		console.log(oangle,iangle)
		if(Math.abs(oangle-iangle)==1){
			$scope.iangle=$scope.oangle;
		}
		$scope.iangle%=360;
	}
	
	function touch(v){
		return (360*360+v)%360;
	}
	
	function direction(){
		var oangle=$scope.oangle,poangle=$scope.poangle;
		$scope.poangle=$scope.oangle;
		if(oangle-poangle>0){
			console.log(CW)
			return CW;//CCW
		}
		if(oangle-poangle<0){
			console.log(CCW)
			return CCW;
		}
		return 0;
	}
	var pi=Math.PI;
	$scope.torad=function(z){
		return z*pi/180;
	}
	$scope.gotot=function(angle){


		if($scope.oangle <angle*30 ){
			for (var i = $scope.oangle; i < angle*30; i++) {
				$scope.oangle++;
				$scope.enjoy();
				$scope.oangle%=360;
			}
			$scope.enjoy();
			$scope.oangle%=360;
		}
		if($scope.oangle > angle*30){
			for (var i = $scope.oangle; i < 30*angle+360; i++) {	
				$scope.oangle++;
				$scope.enjoy();
				$scope.oangle%=360;
			}
			$scope.enjoy();
			$scope.oangle%=360;
		}
	}
});