public class ShellSort {
    public static void main(String[] args) {
        int[] nums = new int[]{3,2,5,1,2,8,9,0,10,12,9,8,6,3,12,13};
        ShellSort ss = new ShellSort();
        ss.shellSort(nums);
        for(int num: nums) {
            System.out.print(num + "   ");
        }
    }


    public void shellSort(int[] nums) {
        if(nums == null || nums.length == 0) {
            return;
        }

        //this is Knuth Sequecne, with this gap sequence, shell sort time complexity should be O(n^1.5)
        int gap = 1;
        while(gap < nums.length) {
            gap = gap * 3 + 1;
        }

        for(; gap > 0; gap = gap / 3) {
            for(int i = gap; i < nums.length; i++) {
                int min = nums[i];
                int j = i - gap;
                for(; j >= 0 && nums[j] > min; j -= gap) {
                    nums[j + gap] = nums[j];
                }
                nums[j + gap] = min;
            }
        }
    }
}
