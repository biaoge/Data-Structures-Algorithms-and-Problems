/**
 * O(n^2) worst, average, best time complexity, O(1) space
 */
public class InsertionSort {
    public static void main(String[] args) {
        int[] nums = new int[] {3,5,6,2,4,1,8,7,9,0};
        InsertionSort is = new InsertionSort();
        is.insertionSort(nums);
        for(int num: nums) {
            System.out.print(num + "   ");
        }
    }

    public void insertionSort(int[] nums) {
        if(nums == null || nums.length == 0) {
            return;
        }

        for(int i = 1; i < nums.length; i++) {
            int min = nums[i];
            int j = i - 1;
            for(; j >= 0 && nums[j] > min; j--) {
                nums[j + 1] = nums[j];
            }
            nums[j + 1] = min;
        }
    }
}