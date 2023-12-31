﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Tehnotron.Interfaces
{
    public interface IRepositoryBase<T> where T : class 
    {
        IQueryable<T> GetAll();
        IQueryable<T> GetByCondition(Expression<Func<T, bool>> condition);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
