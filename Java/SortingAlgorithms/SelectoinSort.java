/**
    * SelectionSort
    * @param nums
    * 每次选出最小的min和minIndex，放在最左端
    * O(n^2) worst, average, best, O(1) space
    */
public void SelectionSort(int[] nums) {
    if(nums == null || nums.length == 0) {
        return;
    }

    for(int i = 0; i < nums.length; i++) {
        int minIndex = i;
        int min = nums[minIndex];
        // min和minIndex一个都不能少，保证每一轮拿到的都是i到end的最小值
        for(int j = i + 1; j < nums.length; j++) {
            if(nums[j] < min) {
                minIndex = j;
                min = nums[j];
            }
        }
        swap(nums, i, minIndex);
    }

}

private void swap(int[] nums, int left, int right) {
    int tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;
}