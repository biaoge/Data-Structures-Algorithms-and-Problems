/**
 * O(n^2) worst, average, best time complexity, O(1) space
 */
public class BubbleSort {
    public static void main(String[] args) {
        int[] nums = new int[]{5,4,3,2,1,6,7,4,5,2,1,3,0};
        BubbleSort bs = new BubbleSort();
        bs.bubbleSort(nums);
        for(int num: nums) {
            System.out.print(num + "   ");
        }
    }

    public void bubbleSort(int[] nums) {
        if(nums == null || nums.length == 0) {
            return;
        }

        for(int i = 0; i < nums.length; i++) {
            for(int j = 0; j < nums.length - i - 1; j++) {
                if(nums[j] > nums[j + 1]) {
                    swap(nums, j, j + 1);
                }
            }
        }
    }

    private void swap(int[] nums, int left, int right) {
        int tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
    }
}
