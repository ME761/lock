var app=angular.module('me',[]);
app.controller('mainCtrl',function($scope) {
	$scope.oangle=10;
	$scope.iangle=50;
	$scope.poangle=$scope.oangle;
	var CCW=-1,CW=1;
	$scope.enjoy=function(){
		rotatei();
		console.log(direction());
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
	
});