import com.sun.scenario.effect.Merge;

public class MergeSort {

    public static void main(String[] args) {
        MergeSort ms = new MergeSort();
        int[] nums = new int[] {3,2,5,4};
        ms.mergeSort(nums);

        for(int num: nums) {
            System.out.print(num + '\t');
        }
    }


    public void mergeSort(int[] nums) {
        if(nums == null || nums.length == 0) {
            return;
        }

        int[] helper = new int[nums.length];
        mergeSort(nums, helper, 0, nums.length - 1);
    }

    private void mergeSort(int[] nums, int[] helper, int left, int right) {
        if(left >= right) {
            return;
        }

        int mid = left + (right - left) / 2;
        mergeSort(nums, helper, left , mid);
        mergeSort(nums, helper, mid + 1, right);

        merge(nums, helper, left, mid, right);
    }

    private void merge(int[] nums, int[] helper, int left, int mid, int right) {
        for(int k = left; k <= right; k++) {
            helper[k] = nums[k];
        }

        int leftIndex = left, rightIndex = mid + 1;
        int k = left;

        while(leftIndex <= mid && rightIndex <= right) {
            if(helper[leftIndex] <= helper[rightIndex]) {
                nums[k++] = helper[leftIndex];
            } else {
                nums[k++] = helper[rightIndex];
            }
        }

        while(leftIndex <= mid) {
            nums[k++] = helper[left++];
        }

        while(rightIndex <= right) {
            nums[k++] = helper[rightIndex++];
        }
    }

}
