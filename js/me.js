var app=angular.module('me',[]);
app.controller('mainCtrl',function($scope,$timeout) {
	var ocurrent=$scope.ocurrent%360,icurrent=$scope.icurrent%360,next=0,CW=1,CCW=-1,xicurrent=0;
	$scope.Math=Math;
	$scope.buttons=[1,2,3,4,5,6,7,8,9,10,11,12];
	$scope.torad=function(z){
		return z*Math.PI/180;
	}

	$scope.reset=function(){
		init();
	}
	init();
	function init(){
		$scope.icurrent=360*360+getRandomArbitrary(150,350);
		$scope.ocurrent=360*360+getRandomArbitrary(51,151);
		$scope.iicurrent=360*360+getRandomArbitrary(1,50);
		$scope.unlocked=false;
		$scope.DIR=CW;
	}
	$scope.nnjoy=function(pos){
		next=(pos*30 )% 360;
		var normalized;
		ocurrent=$scope.ocurrent%360;
		icurrent=$scope.icurrent%360;
		var middleCurrent=icurrent;
		xicurrent=0;
		if($scope.DIR==CW) {
			if(next<ocurrent){
				normalized=360 - ocurrent + next;
			}else{
				normalized=next - ocurrent;
			}
			for(var i=ocurrent;i<=ocurrent+normalized;i++){
				if(icurrent - (i%360)==1){
					xicurrent=normalized - icurrent + ocurrent+1;
					xicurrent%=360;
				}
			}
			$scope.icurrent+=xicurrent;
			$scope.ocurrent+=normalized;
		}
		if($scope.DIR==CCW){
			if(next<ocurrent){
				normalized=ocurrent - next;
			}else{
				normalized=(360 - next + ocurrent)%360;
			}

			var move=0;
			if(icurrent<ocurrent){
				move=ocurrent - icurrent;
			}else{
				move=(360 - icurrent + ocurrent)%360;
			}
			if(move<normalized){
				xicurrent=normalized - (-icurrent + ocurrent) +1;
				// xicurrent=normalized - move +1;
				xicurrent%=360;
			}
			$scope.icurrent-=xicurrent;
			$scope.ocurrent-=normalized;
		}
		var middleNext=$scope.icurrent%360;
		inner(middleCurrent,middleNext)
		isUnlocked();
	}

	function inner(ocurrent,next){
		var icurrent=$scope.iicurrent%360;
		xicurrent=0;
		if($scope.DIR==CW) {
			if(next<ocurrent){
				normalized=360 - ocurrent + next;
			}else{
				normalized=next - ocurrent;
			}
			for(var i=ocurrent;i<=ocurrent+normalized;i++){
				if(icurrent - (i%360)==1){
					xicurrent=normalized - icurrent + ocurrent+1;
					xicurrent%=360;
				}
			}
			$scope.iicurrent+=xicurrent;
			// $scope.icurrent+=normalized;
		}
		if($scope.DIR==CCW){
			if(next<ocurrent){
				normalized=ocurrent - next;
			}else{
				normalized=(360 - next + ocurrent)%360;
			}

			var move=0;
			if(icurrent<ocurrent){
				move=ocurrent - icurrent;
			}else{
				move=(360 - icurrent + ocurrent)%360;
			}
			if(move<normalized){
				xicurrent=normalized - (-icurrent + ocurrent) +1;
				// xicurrent=normalized - move +1;
				xicurrent%=360;
			}
			$scope.iicurrent-=xicurrent;
			// $scope.icurrent-=normalized;
		}
	}

	function getRandomArbitrary(min, max) {
	    return Math.floor(Math.random() * (max - min) + min);
	}

	function isUnlocked(){
		if($scope.icurrent%360<182 && $scope.icurrent%360>178 && (180+$scope.ocurrent)%360<182 && (180+$scope.ocurrent)%360>178 && $scope.iicurrent%360<182 && $scope.iicurrent>178){
			$scope.unlocked=true;
		}else{
			$scope.unlocked=false;
		}
	}
});