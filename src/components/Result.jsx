// // Normal variable — recalculates EVERY render
// const result = expensiveWork();

// // useMemo variable — recalculates ONLY when dependency changes
// const result = useMemo(() => {
//     return expensiveWork();
// }, [whenThisChanges]);

// export default result;