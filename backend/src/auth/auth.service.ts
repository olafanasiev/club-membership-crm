import {Injectable} from '@nestjs/common';
import {UserService} from '../user/user.service';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {User} from '../user/user';
@Injectable()
export class AuthService {

  constructor(private userService: UserService,
              private jwtService: JwtService) {
  }

  async login(user: any) {
    const payload = {selectedBranch: user.selectedBranch, id: user.id, username: user.username, firstName: user.firstName, lastName: user.lastName,  photoLink: user.photoLink  };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string, branchId: number): Promise<any> {
    // FIXME::  MAKE SINGLE QUERY FOR searching  USER WITH PARTICULAR BRANCHES   !
    const user = await this.userService.findOne({ where: {username}});
      const isPasswordMatch = await bcrypt.compare(pass, user.password);
      if (isPasswordMatch) {
        const branch = user.branches.find( b => b.id == branchId);
        if( branch ) {
          const {password, ...result} = user;
          return {...{selectedBranch: branch}, ...result}
        }
      }
    return null;
  }
}
