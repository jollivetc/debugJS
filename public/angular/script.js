angular.module('HelloApp', [])
	.controller('HelloCtrl', function(){
		var vm = this;
		vm.helloValue = 'World'; 
		vm.inputContent = '';
		
		vm.clicked = function(){
			vm.helloValue = vm.inputContent;	
		}
	});