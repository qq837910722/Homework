    var arr = ['a','m','b','d','m','a','k','m','p','j','a'];
     //定义一个result对象
    var result={};

    arr.forEach(function(item,index){
        //将arr数组的值存入key中
        var key = result[item];
        if(key){
            //key.num为字母出现的次数
            key.num+=1;
            //存放出现的位置
            key.position.push(index);
        }else{
            result[item]={num:1,position:[index]};
        }
    });
    //获取排序后最大的键名
    var maxChar = Object.keys(result).sort(function(a,b){
        return result[a].num < result[b].num;
    })[0];
    

    alert('出现次数最多的字母是：'+maxChar+'，共出现了'+ result[maxChar].num +'次，它在数组中的位置是：'+ result[maxChar].position);