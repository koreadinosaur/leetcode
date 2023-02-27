/**
 * @param {number[]} height
 * @return {number}
 45분
 */
var maxArea = function(height) {
  
    let left = 0;
    let right = height.length-1;
    let maxContainer = Math.min(height[right],height[left])*(height.length-1);
    while(left < right){
        if(height[left]>height[right]){
            right--;
        } else{
            left++;
        }
        maxContainer = maxContainer > Math.min(height[right],height[left])*(right-left) ? maxContainer : Math.min(height[right],height[left])*(right-left);
    }
    return maxContainer;
};