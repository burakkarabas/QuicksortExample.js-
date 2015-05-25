package com.javacodegeeks.sorting.quicksort;
 
public class QuicksortExample {
        private static int ComparSana=0;
        private static int SwapSana = 0;
        
	private static int []a;
	public static void main(String[] args) {
		// Get a random generated array
		a = getArray();
		
		// prints the given array
		printArray();
		
		// sort the array
		sort();
		
		System.out.println("");
		
		//prints the sorted array
		printArray();
                System.out.println("");
                System.out.println("Swap: "+SwapSana);
                System.out.println("Comparation: "+ComparSana);
                
		
	}
	public static void sort(){
		int left = 0;
		int right = a.length-1;
			
		quickSort(left, right);
	}
 
	private static void quickSort(int left,int right){
		
		if(left >= right){
                        SwapSana++;
			return;
                }
		
		int pivot = a[right];
		int partition = partition(left, right, pivot);
		
		quickSort(0, partition-1);
		quickSort(partition+1, right);
	}
	
	private static int partition(int left,int right,int pivot){
		int leftCursor = left-1;
		int rightCursor = right;
		while(leftCursor < rightCursor){
                while(a[++leftCursor] < pivot){
                    ComparSana++;
                }
                while(rightCursor > 0 && a[--rightCursor] > pivot){
                    ComparSana++;
                }
                ComparSana++;
			if(leftCursor >= rightCursor){
                            SwapSana++;
				break;
			}else{
                            SwapSana++;
                            swap(leftCursor, rightCursor);
			}
		}
		swap(leftCursor, right);
		return leftCursor;
	}
	
	// This method is used to swap the values between the two given index
	public static void swap(int left,int right){
		int temp = a[left];
		a[left] = a[right];
		a[right] = temp;
	}
	
	public static void printArray(){
		for(int i : a){
			System.out.print(i+" ");
		}
                
	}
	
	public static int[] getArray(){
		int size=10;
		int []array = new int[size];
		int item = 0;
		for(int i=0;i<size;i++){
			item = (int)(Math.random()*100); 
			array[i] = item;
		}
		return array;
	}
 
}
