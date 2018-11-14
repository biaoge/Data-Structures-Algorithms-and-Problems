public class QuickSort {
    public static void main(String[] args) {
        int[] nums = new int[]{1,9,8,5,3};
        quickSort(nums);
        for(int num: nums) {
            System.out.print(num + " ");
        }
    }

    public static void quickSort(int[] nums) {
        if(nums == null || nums.length == 0) {
            return;
        }

        quickSort(nums, 0, nums.length - 1);
    }

    public static void quickSort(int[] nums, int left, int right) {
        if(left >= right) {
            return;
        }

        int pivotPos = partition(nums, left, right);
        quickSort(nums, 0, pivotPos - 1);
        quickSort(nums, pivotPos + 1, right);
    }

    private static int partition(int[] nums, int left, int right) {
        int pivotIndex = findIndex(left, right);
        int pivot = nums[pivotIndex];

        swap(nums, pivotIndex, right);

        int leftBound = left, rightBound = right - 1;
        while(leftBound <= rightBound) {
            if(nums[leftBound] < pivot) {
                leftBound++;
            } else if(nums[rightBound] >= pivot) {
                rightBound--;
            } else {
                swap(nums, leftBound++, rightBound--);
            }
        }
        swap(nums, leftBound, right);
        return leftBound;
    }

    private static int findIndex(int left, int right) {
        return left + (int) Math.random() * (right - left + 1);
    }

    private static void swap(int[] nums, int left, int right) {
        int tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
    }

}