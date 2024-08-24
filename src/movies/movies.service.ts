import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
    private movies:Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id:number): Movie {
        console.log(id,'id');
        const movie = this.movies.find(movie => movie.id === (id));
        if(!movie){
            throw new NotFoundException("Not found Movie with ID");
        }
        return movie;
    }

    deleteone(id:number) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    create(movieData:CreateMovieDto){
        this.movies.push({
            id:this.movies.length +1,
            ...movieData,
        })
    }

    update(id:number, updateData:UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteone(id);
        this.movies.push({...movie,...updateData});
        
    }

}