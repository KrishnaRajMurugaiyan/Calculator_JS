var total="";
   function calc(num)
   {
      total=total+num;
      document.getElementById("disp").value=total;
   }
   function evaluation()
   {
      var num=eval(total);
      total=num;
      document.getElementById("disp").value=num;
   }
   function initialize()
   {
      total="";
   }
   function zero()
   {
      document.getElementById("disp").value="0";
   }
   function del()
   {
         total=total.slice(0,total.length-1);
         document.getElementById("disp").value=total;
   }