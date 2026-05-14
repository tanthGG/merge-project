import { merge } from '../src/merge.js';

describe('merge', () => {
  describe('typical cases', () => {
    it('merges three sorted arrays with interleaved values', () => {
      expect(merge([1, 4, 7], [8, 5, 2], [3, 6, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('merges three sorted non-overlapping arrays in order', () => {
      expect(merge([1, 2, 3], [6, 5, 4], [7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('merges three sorted arrays of different lengths', () => {
      expect(merge([1, 3], [8, 6, 4, 2], [5, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('empty array cases', () => {
    it('returns empty array when all three inputs are empty', () => {
      expect(merge([], [], [])).toEqual([]);
    });

    it('returns correct result when collection_1 is empty', () => {
      expect(merge([], [3, 1], [2, 4])).toEqual([1, 2, 3, 4]);
    });

    it('returns correct result when collection_2 is empty', () => {
      expect(merge([1, 3], [], [2, 4])).toEqual([1, 2, 3, 4]);
    });

    it('returns correct result when collection_3 is empty', () => {
      expect(merge([1, 3], [4, 2], [])).toEqual([1, 2, 3, 4]);
    });

    it('returns collection_3 when collection_1 and collection_2 are empty', () => {
      expect(merge([], [], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('returns collection_2 when collection_1 and collection_3 are empty', () => {
      expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
    });

    it('returns collection_1 when collection_2 and collection_3 are empty', () => {
      expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
    });
  });

  describe('single element cases', () => {
    it('merges three single-element arrays', () => {
      expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
    });

    it('merges single-element arrays out of natural order', () => {
      expect(merge([3], [1], [2])).toEqual([1, 2, 3]);
    });

    it('handles a single element against two empty arrays', () => {
      expect(merge([5], [], [])).toEqual([5]);
    });
  });

  describe('duplicate values', () => {
    it('preserves all duplicates across arrays', () => {
      expect(merge([1, 1], [2, 1], [2, 3])).toEqual([1, 1, 1, 2, 2, 3]);
    });

    it('handles all identical values', () => {
      expect(merge([2, 2], [2, 2], [2, 2])).toEqual([2, 2, 2, 2, 2, 2]);
    });

    it('handles duplicates within the same array', () => {
      expect(merge([1, 1, 1], [2, 2], [3])).toEqual([1, 1, 1, 2, 2, 3]);
    });
  });

  describe('negative and mixed numbers', () => {
    it('merges arrays of negative numbers', () => {
      expect(merge([-6, -4], [-3, -5], [-2, -1])).toEqual([-6, -5, -4, -3, -2, -1]);
    });

    it('merges arrays with mixed positive and negative numbers', () => {
      expect(merge([-3, -1], [0, -2], [1, 2])).toEqual([-3, -2, -1, 0, 1, 2]);
    });

    it('handles zero as a value', () => {
      expect(merge([-1], [0], [1])).toEqual([-1, 0, 1]);
    });
  });
});
