/**
 * Created by DELL on 2017/3/9.
 */

(function (window) {
/** 注册一个应用程序的主模块，module方法如果只传入一个参数就不是创建一个新的模块而是获取一个已有模块*/
    window.angular.module('TodoApp',[]);
    /**为主模块注册控制器*/
    //window.angular.module('TodoApp')获取一个已有模块
    window.angular.module('TodoApp').controller('MainController',['$scope','$http',function ($scope,$http) {
   //$scope 的作用就是往视图中暴露数据的
        //文本框中的值
        $scope.text='';//会和文本框做双向数据绑定
        //任务列表 数据写死的，通过异步请求拿到或经过业务逻辑过后得到的结果
        $scope.todoList=[{
            text:'学习angularJs基础',
            done:false
        },{
            text:'学习react基础',
            done:false
        },{
            text:'学习native基础',
            done:false
        }];

    //add逻辑
        $scope.add=function () {
            var text=$scope.text.trim();
            if(text){
                $scope.todoList.push({
                    text:text,
                    done:false
                });
                $scope.text='';
            }
        }
        //删除
        $scope.delete=function (todo) {
            var index=$scope.todoList.indexOf(todo);
            $scope.todoList.splice(index,1);//remove
        };
        //已完成个数（数据如果会变使用函数的方式）
        $scope.doneCount=function () {
            var temp = $scope.todoList.filter(function (item) {
            return item.done;//返回true表示当前item满足条件
            });
            return temp.length;
        };

    }]);

})(window);
