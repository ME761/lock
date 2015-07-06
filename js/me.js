var app=angular.module('me',[]);
app.controller('mainCtrl',function($scope,$timeout) {
	$scope.Math=Math;
	$scope.buttons=[1,2,3,4,5,6,7,8,9,10,11,12];
	$scope.torad=function(z){
		return z*Math.PI/180;
	}

	$scope.icurrent=360*360+75;
	$scope.ocurrent=360*360+60;
	var ocurrent=$scope.ocurrent%360,icurrent=$scope.icurrent%360,next=0,CW=1,CCW=-1,xicurrent=0;
	$scope.DIR=CW;
	$scope.nnjoy=function(pos){
		next=(pos*30 )% 360;
		var normalized=next;
		console.log(normalized);
		if(next<ocurrent){
			normalized=360 - ocurrent + next;
			console.log('yp',normalized)
		}else{
			normalized=pos*30 - ocurrent;
			console.log('npe')
		}
		ocurrent=$scope.ocurrent%360;
		icurrent=$scope.icurrent%360;
		xicurrent=0;
		console.log('normalized',normalized)
		for(var i=ocurrent;i<=ocurrent+normalized;i++){
			// console.log('yeah');
			if($scope.DIR==CW) {
				console.log(icurrent,i);
				if(icurrent - (i%360)==1){
					// xicurrent=normalized+1;
					xicurrent=normalized - icurrent + ocurrent+1;
					console.log('yeah',xicurrent,next+1)
				}
			}
		}
		$scope.icurrent+=xicurrent;
		icurrent=xicurrent;
		$scope.ocurrent+=normalized;
		ocurrent=next;
	}
});