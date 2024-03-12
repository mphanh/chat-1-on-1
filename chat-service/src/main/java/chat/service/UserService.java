package chat.service;

import chat.model.Status;
import chat.model.User;
import chat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(User user) {
        user.setStatus(Status.ONLINE);
        userRepository.save(user);
    }

    public void disconnect(User user) {
        var storedUser = userRepository.findById(user.getNickName()).orElse(null);
        if(storedUser != null) {
            storedUser.setStatus(Status.OFFLINE);
            userRepository.save(storedUser);
        }
    }

    public List<User> findConnectedUsers() {
        return userRepository.findAllByStatus(Status.ONLINE);
    }
}
