import columnAccessor from './columnAccessor';

describe('Util:columnAccessor', () => {
    it('should access the value of a column', () => {
        const accessor = columnAccessor({ column: 'foo' });
        const d = { foo: 5 };
        expect(accessor(d)).toEqual(5);
    });
    it('should apply a number formatter', () => {
        const accessor = columnAccessor({ column: 'foo', format: '.0s' });
        const d = { foo: 10000 };
        expect(accessor(d)).toEqual('10k');
    });
    it('should apply a date formatter', () => {
        const accessor = columnAccessor({ column: 'foo', timeFormat: '%x' });
        const d = { foo: 1479465567343 };
        expect(accessor(d)).toEqual('11/18/2016');
    });
});
