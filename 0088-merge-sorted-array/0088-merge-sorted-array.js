/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    /*
    1. 재귀함수로 분해
    2. 병합 helper 함수로 크기를 비교하면서 병합
     */
     nums1.splice(m,n);
     nums1.push(...nums2);
     nums1.sort((a,b)=>a-b);
};